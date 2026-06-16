import os
import shutil

source_folder = "source_folder"
destination_folder = "destination_folder"

if not os.path.exists(destination_folder):
    os.makedirs(destination_folder)

for file in os.listdir(source_folder):
    if file.endswith(".jpg"):
        shutil.move(
            os.path.join(source_folder, file),
            os.path.join(destination_folder, file)
        )

print("✅ JPG files moved successfully!")