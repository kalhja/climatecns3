import flask
from . import analytics


@analytics.route("/events_map")
def events_map():
    return flask.render_template("analytics/events_map.html")


@analytics.route("/records_map")
def records_map():
    return flask.render_template("analytics/records_map.html")
