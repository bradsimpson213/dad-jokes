from .db import db


class Joke(db.Model, UserMixin):
    __tablename__ = 'jokes'

    id = db.Column(db.Integer, primary_key = True)
    body = db.Column(db.String(255), nullable = False)
    punchline = db.Column(db.String(255), nullable = False)
    rating = db.Column(db.String(255), nullable = False)
    created = db.Column(db.DateTime, nullable=False)

    def to_dict(self):
        return { "id": self.id, "body": self.body, "punchline": self.punchline, 
            "rating": self.rating, "created": self.created }

