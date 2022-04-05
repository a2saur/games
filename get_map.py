import matplotlib.pyplot as plt
import numpy as np
from PIL import Image

file = open("collection_py.js")

content = file.read().split("const cMAP = ")
content2 = content[1].split("const cMAP_NUM = ")
map_list = np.asarray(eval(content2[0]))

# content = file.read().split("let town_locs = ")
# content2 = content[1].split("const cBLOCK_WIDTH = 32;")
# town_locs = eval(content2[0])
# for loc_info in town_locs:
#     loc_info[1]

file.close()

rColors = {
    "W":0,
    "M":240,
    "G":0,
    "B":255,
}
gColors = {
    "W":120,
    "M":245,
    "G":150,
    "B":215,
}
bColors = {
    "W":255,
    "M":255,
    "G":0,
    "B":150,
}


colored_map = np.zeros((map_list.shape[0], map_list.shape[1], 3), dtype=np.uint8)
for y in range(map_list.shape[0]):
    for x in range(map_list.shape[1]):
        colored_map[y, x, 0] = rColors[map_list[y, x]]
        colored_map[y, x, 1] = gColors[map_list[y, x]]
        colored_map[y, x, 2] = bColors[map_list[y, x]]
        
im = Image.fromarray(colored_map)
im.save("./Images/collection/items/map.png")