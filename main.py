"""`main` is the top level module for your Flask application."""

# Imports
import os
import jinja2
import webapp2
import logging
import codecs

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

# Import the Flask Framework
from flask import Flask, request, send_file
#from flask_cors import CORS, cross_origin
app = Flask(__name__)
#CORS(app)

# Note: We don't need to call run() since our application is embedded within
# the App Engine WSGI application server.


def cors_stuff(response):
    if(request.path): # and re.search(r'\.(ttf|woff|svg|eot)$'.request.path)):
        response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/')
def index():
    template = JINJA_ENVIRONMENT.get_template('templates/index.html')

    # render the web page with the data
    return template.render()


@app.route('/about')
def about():
    template = JINJA_ENVIRONMENT.get_template('templates/about.html')
    return template.render()

@app.route('/ExploratoryAnalysis')
def exploratory_analysis():
    template = JINJA_ENVIRONMENT.get_template('templates/exploratory_analysis.html')
    return template.render()

@app.route('/Map')
def map_screen():
    template = JINJA_ENVIRONMENT.get_template('templates/pittsburgh_map.html')
    return template.render()


@app.route('/pittsburgh_map.topo.json')
def pitt_map_topo_json(path = None):
    return send_file("data/pittsburgh_map.topo.json",as_attachment=True)


@app.route('/data/d3_test_data.csv')
def ddd3(path = None):
    return send_file("data/d3_test_data.csv",as_attachment=True)

@app.route('/data/d3_test_data.tsv')
def ddd(path = None):
    #if path is None:
    #   self.Error(400)
    #try:
    #path = path[1:]
    #return send_file(path,as_attachment=True)

    #fd = codecs.open("data/d3_test_data.tsv","r","utf-8")
    #rawline = fd.readline()
    #print rawline
    #fd.close()

    return send_file("data/d3_test_data.tsv",as_attachment=True)
   # except Exception as e:
   #     self.log.exception(e)
   #     self.Error(400)

@app.route('/d3_stuff')
def d3_stuff():
        # this is necessary to allow d3 to download stuff!
#    app.after_request(cors_stuff)
    template = JINJA_ENVIRONMENT.get_template('templates/d3_stuff.html')
    return template.render()


@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, Nothing at this URL.', 404


@app.errorhandler(500)
def application_error(e):
    """Return a custom 500 error."""
    return 'Sorry, unexpected error: {}'.format(e), 500
