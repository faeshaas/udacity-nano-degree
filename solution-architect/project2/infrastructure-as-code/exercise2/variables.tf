# TODO: Define the variable for aws_region
variable "aws_region" {
  description = "The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc."
  type        = string
  default     = "us-east-1" # replace with your preferred region
}

variable "aws_access_key" {
  description = "The AWS access key. It must be provided, but it can also be sourced from the AWS_ACCESS_KEY_ID environment variable."
  type        = string
}

variable "aws_secret_key" {
  description = "The AWS secret access key. It must be provided, but it can also be sourced from the AWS_SECRET_ACCESS_KEY environment variable."
  type        = string
}

variable "aws_token" {
  description = "The AWS session token. It can be sourced from the AWS_SESSION_TOKEN environment variable."
  type        = string
}