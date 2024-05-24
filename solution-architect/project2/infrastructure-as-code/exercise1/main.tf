# TODO: Designate a cloud provider, region, and credentials

provider "aws" {
  region     = var.aws_region
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  token      = var.aws_token
}

# TODO: provision 4 AWS t2.micro EC2 instances named Udacity T2
resource "aws_instance" "udacity_t2" {
  count         = 4
  ami           = "ami-0bb84b8ffd87024d8" # This is an example AMI ID, replace with the actual AMI ID you want to use
  instance_type = "t2.micro"

  tags = {
    Name = "Udacity T2"
  }
}

# TODO: provision 2 m4.large EC2 instances named Udacity M4
resource "aws_instance" "udacity_m4" {
  count         = 2
  ami           = "ami-0bb84b8ffd87024d8" # This is an example AMI ID, replace with the actual AMI ID you want to use
  instance_type = "m4.large"

  tags = {
    Name = "Udacity M4"
  }
}