"""empty message

Revision ID: 252f67d2bcde
Revises: 1a1e85290874
Create Date: 2023-11-02 18:14:05.531428

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '252f67d2bcde'
down_revision = '1a1e85290874'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('event', schema=None) as batch_op:
        batch_op.add_column(sa.Column('creatorId', sa.Integer(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('event', schema=None) as batch_op:
        batch_op.drop_column('creatorId')

    # ### end Alembic commands ###
