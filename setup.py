from setuptools import setup

setup(
    name="veganpot",
    # TODO - Update version after creating MVP
    version=0.0,
    description="A vegan recipe sharing web app",
    author="Michelle Mounde",
    author_email="michellemounde@gmail.com",
    entry_points={
       'console_scripts': [
           'format_lint = scripts.check_fix_style:your_function',
       ],
    },
    # TODO - test_suite="tests",
    url="https://github.com/michellemounde/veganpot",
    # TODO - license="MPL-2.0"
)
