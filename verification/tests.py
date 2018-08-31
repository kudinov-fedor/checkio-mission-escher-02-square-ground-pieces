"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""


TESTS = {
    "Basics": [
        {
            "input": '''
0000000
##00##0
######0
##00##0
#0000#0
''',
            "answer": 24
        },
        {
            "input": '''0000000000
#00000000#
##########
##00000000
#000000000
''',
            "answer": 40
        }
    ],
    "Extra": [
        {
            "input": '''0000000000
0000000000
0000000000
0000000000
0000000000
''',
            "answer": 0
        },
        {
            "input": '''0000##0000
#000##000#
##########
##000000##
0########0
''',
            "answer": 50
        },
        {
            "input": '''0000
#0#0
###0
''',
            "answer": 6
        },
        {
            "input": '''
0000000000
000###0000
000#######
000###0000
''',
            "answer": 21
        },
        {
            "input": '''
0000##000#
0000######
00000000##
0000#####0
''',
            "answer": 24
        },
        {
            "input": '''0000
##00
##00
''',
            "answer": 4
        },
        {
            "input": '''
0##0
''',
            "answer": 2
        },
        {
            "input": '''0000000000
#000##000#
##########
##000000##
0000000000
''',
            "answer": 30
        },
        {
            "input": '''0000
0000
#000
''',
            "answer": 1
        }


    ]
}
