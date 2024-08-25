# Rekognition App

This project is a Python-based application that utilizes AWS Rekognition to analyze images. The app can detect labels, faces, and objects in images using the powerful machine learning models provided by AWS Rekognition.

## Features

- **Label Detection**: Identify objects, scenes, and concepts in your images.
- **Face Detection**: Detect faces within images, along with their attributes.
- **Customizable**: Easily extend the app to use other Rekognition features like celebrity recognition or text detection.

## Prerequisites

Before you begin, ensure you have the following:

- **Python 3.8+**: The app is built with Python, so make sure you have Python installed.
- **AWS Account**: An AWS account with permissions to use Rekognition.
- **Docker**: (Optional) For containerized deployment.

## Installation

**Clone the Repository**

   ```bash
   git clone https://github.com/shlomias1/rekognition-app.git
   cd rekognition-app

**Install Dependencies**

You can install the required Python packages using pip and the provided requirements.txt:

pip install -r requirements.txt

**Set Up AWS Credentials**

Ensure that your AWS credentials are configured properly. You can set them up using the AWS CLI:

aws configure

Alternatively, you can set up the environment variables:

export AWS_ACCESS_KEY_ID=your_access_key_id
export AWS_SECRET_ACCESS_KEY=your_secret_access_key
export AWS_DEFAULT_REGION=your_aws_region

**Usage**
**Running the App**

You can run the app locally with the following command:

python app.py

By default, the app will process images located in the images/ directory.

**Docker Deployment**

If you prefer to run the app inside a Docker container, follow these steps:

Build the Docker Image:

docker build -t rekognition-app .

Run the Docker Container:

docker run -d -p 5000:5000 rekognition-app

**Contact**

For any questions or inquiries, please contact:

Name: Shlomi Assayag
Email: shlomiasi1@gmail.com











