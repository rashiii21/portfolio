import sys
import urllib.request
from rembg import remove
from PIL import Image

input_path = r"C:\Users\Rashi Shrivastava\.gemini\antigravity-ide\brain\01d3f3dd-7bb1-4fd0-8884-b4bdef28c96c\media__1782219323451.jpg"
output_path = r"C:\Users\Rashi Shrivastava\Portfolio-Website\public\images\rashi.png"

def process_image():
    # Remove background
    with open(input_path, "rb") as i:
        input_data = i.read()
        output_data = remove(input_data)
        
    with open(output_path, "wb") as o:
        o.write(output_data)

if __name__ == "__main__":
    process_image()
