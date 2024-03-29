
from flask import Flask, jsonify, send_from_directory,request
# import os
from categoriesData import categories, services  # Importing data from categoriesData.py
from packages import packages, projects
from brandidentity import *
from logos import *
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask_cors import CORS
import smtplib


app = Flask(__name__)


@app.route('/categories')
def get_categories():
    return jsonify(categories)

@app.route('/packages')
def get_packages():
    print("Accessing .packages endpoint")
    print ("hi")
    return jsonify(packages)

@app.route('/projects/<int:package_id>')
def get_projects(package_id):
    package_projects = [project for project in projects if project["id"] == package_id]
    return jsonify(package_projects)

@app.route('/logos')
def get_logos():
    print("Accessing .packages endpoint")
    print ("hi")
    return jsonify(logos)

@app.route('/projects/<int:package_id>')
def get_logosprojects(logos_id):
    logos_projects = [project for project in projects if project["id"] == logos_id]
    return jsonify(logos_projects)

@app.route('/brandidentity')
def get_brandidentity():
    print("Accessing .packages endpoint")
    print ("hi")
    return jsonify(brandidentity)

@app.route('/projects/<int:brandidentity_id>')
def get_brandidentityprojects(brandidentity_id):
    brandidentity_projects = [project for project in projects if project["id"] == brandidentity_id]
    return jsonify(brandidentity_projects)



@app.route('/category/<int:category_id>/services')
def get_services(category_id):
    return jsonify(services.get(category_id, []))

@app.route('/service/<int:service_id>')
def get_service(service_id):
    for category_services in services.values():
        for service in category_services:
            if service['id'] == service_id:
                return jsonify(service)
    return jsonify({"error": "Service not found"}), 404





@app.route('/submit_form', methods=['POST'])  
def submit_form():
    data = request.json
    name = data['name']
    email = data['email']
    company_name = data['company_name']
    phone_number = data['phone_number']

 
    sender_email = "your.email@gmail.com"  
    receiver_email = "anngamal14@gmail.com"  
    password = "your_email_password"

    # Create email message
    message = MIMEMultipart("alternative")
    message["Subject"] = "New Contact Form Submission"
    message["From"] = sender_email
    message["To"] = receiver_email

   
    html = f"""\
    <html>
      <body>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Company Name: {company_name}</p>
        <p>Phone Number: {phone_number}</p>
      </body>
    </html>
    """


    message.attach(MIMEText(html, "html"))

    try:
       
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message.as_string())
    except Exception as e:
        return jsonify({'error': str(e)}), 500  # Return error response if sending fails

    return jsonify({'message': 'Form submitted successfully!'})




if __name__ == '__main__':
    app.run(debug=True)

CORS(app)