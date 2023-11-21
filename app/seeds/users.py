from sqlalchemy.sql import text

from app.models import SCHEMA, User, db, debug


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username="Demo-lition", first_name="Demoli", last_name="Tion", email="demo@aa.io", password="password"
    )
    marnie = User(
        username="marnie", first_name="Marnie", last_name="User", email="marnie@aa.io", password="password1"
    )
    bobbie = User(
        username="bobbie", first_name="Bobbie", last_name="User", email="bobbie@aa.io", password="password2"
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if debug == "0":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
