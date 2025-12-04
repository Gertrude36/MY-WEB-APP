# 1. Local variable containing the JavaScript code
locals {
  app_code = <<-EOF
    console.log("Hello from Terraform-generated web app!");
  EOF
}

# 2. Create the index.js file inside webapp/src/
resource "local_file" "webapp_app" {
  filename = "${path.module}/webapp/src/index.js"   # Terraform will create directories automatically
  content  = local.app_code                         # Fill the file with content from local.app_code
}

# 3. Output the path to the created file
output "webapp_file_path" {
  value       = local_file.webapp_app.filename
  description = "The full path to the web application's index.js file."
}
