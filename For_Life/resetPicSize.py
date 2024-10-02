import tkinter as tk
from tkinter import filedialog
from PIL import Image
import os

def compress_image():
    file_path = filedialog.askopenfilename()
    if file_path:
        img = Image.open(file_path)
        save_path = os.path.join(os.getcwd(), "compressed_image.jpg")
        img.save(save_path, "JPEG", quality=50)
        print(f"壓縮後的圖片已保存在 {save_path}")

root = tk.Tk()
root.title("圖片壓縮工具")

button = tk.Button(root, text='選擇圖片並壓縮', command=compress_image)
button.pack(pady=20)

root.mainloop()
