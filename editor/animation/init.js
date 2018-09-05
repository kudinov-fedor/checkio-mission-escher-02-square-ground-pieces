//Dont change it
//Dont change it
requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $) {

        // one solution
        function house(plan) {
            if (plan.indexOf('#') < 0)
                return 0;

            let [r_min, r_max, c_min, c_max] = [10, 0, 10, 0];

            plan.split('\n').filter(x=>x.length).forEach((row, i)=>{
                row.split('').forEach((g, j)=>{
                    if (g === '#'){
                        r_min = Math.min(i, r_min);
                        r_max = Math.max(i, r_max);
                        c_min = Math.min(j, c_min);
                        c_max = Math.max(j, c_max);
                    }
                });
            });
            //return (r_max - r_min + 1) * (c_max - c_min + 1);
            return [[r_min, c_min], [r_max, c_max]];
        }

        function houseCanvas(dom, input) {
            const attr = {
                rect: {
                    empty: {
                        'stroke': '#2080B8',
                        'stroke-width': 1,
                    },
                    house: {
                        'stroke': '#2080B8',
                        'stroke-width': 1,
                        'fill': '#FAA200',
                    },
                    frame: {
                        'stroke': '#006CA9',
                        'stroke-width': 1,
                    },
                },
            };
            const ground = input.split('\n').filter(x=>x.length);
            const result = house(input);

            // paper
            const [w, h] = [ground[0].length, ground.length];
            const SIZE = 20; 
            const os = SIZE/2;
            const paper = Raphael(dom, w*SIZE+os*2, h*SIZE+os*2, 0, 0);

            // draw grid
            for (let i=0; i < h; i += 1) {
                for (let j=0; j < w; j += 1) {
                    paper.rect(
                        SIZE*j+os,
                        SIZE*i+os,
                        SIZE, SIZE).attr(
                            ground[i][j] === '#' ? attr.rect.house
                                                 : attr.rect.empty);
                }
            }

            // draw frame
            const f = paper.rect(
                SIZE*(result[0][1])+os,
                SIZE*(result[0][0])+os,
                SIZE*(result[1][1]-result[0][1]+1),
                SIZE*(result[1][0]-result[0][0]+1)).attr(attr.rect.frame);
            f.animate({'stroke-width': 3}, 509);
        }

        var $tryit;

        var io = new extIO({
            multipleArguments: false,
            functions: {
                python: 'house',
                js: 'house'
            },
            animation: function($expl, data){
                houseCanvas(
                    $expl[0],
                    data.in
                );
            }
        });
        io.start();
    }
);
