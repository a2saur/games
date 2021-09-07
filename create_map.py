import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import random

cWIDTH = 100
cHEIGHT = 75
cSEEDS = 5
cSHIFT = 1
cSINK = 1.5

def random_up_down(options, probability_sep):
  x = random.randrange(100)
  if x < probability_sep:
    return options[0]
  else:
    return options[1]

surrounding = [
               (-1, 1),(0, 1),(1, 1),
               (-1, 0),(1, 0),
               (-1,-1),(0,-1),(1,-1)
]
def spread(map, location, value):
  if location[0] < 0 or location[0] >= cWIDTH:
    return
  elif location[1] < 0 or location[1] >= cHEIGHT:
    return
  map[location[0], location[1]] = value
  for loc in surrounding:
    sur_loc = [location[0]+loc[0], location[1]+loc[1]]
    try:
      if map[sur_loc[0], sur_loc[1]] < value-cSHIFT and value-cSHIFT > 0:
        spread(map, sur_loc, value-random_up_down([-cSHIFT, cSHIFT], 4))
    except IndexError:
      pass

def sink(map, location, value, sunken):
  if sunken[location[0], location[1]] > value:
    return
  elif location[0] < 0 or location[0] >= cWIDTH:
    return
  elif location[1] < 0 or location[1] >= cHEIGHT:
    return
  sunken[location[0], location[1]] = value
  for loc in surrounding:
    sur_loc = [location[0]+loc[0], location[1]+loc[1]]
    try:
      if value-cSINK > 0:
        sink(map, sur_loc, value-cSINK, sunken)
    except IndexError:
      pass

# x, y
map = np.zeros((cWIDTH, cHEIGHT))
start_val = random.randrange(20, 40)
print(start_val)
spread(map, (random.randrange(10, cWIDTH-10), random.randrange(10, cHEIGHT-10)), start_val)

sunken = np.zeros((cWIDTH, cHEIGHT))
sink_start_val = random.randrange(10, 20)
print(sink_start_val)
sink(map, (random.randrange(10, cWIDTH-10), random.randrange(10, cHEIGHT-10)), sink_start_val, sunken)

for x in range(cWIDTH):
  for y in range(cHEIGHT):
    map[x, y] -= sunken[x, y]

to_plot = map.transpose()
plt.imshow(to_plot)
plt.gca().invert_yaxis()
plt.colorbar()

# Grass Water Beach Mountain Volcano Cave

biomes = {
    "M":[27, 40],
    "G":[17, 26],
    "B":[14, 16],
    "W":[-10, 13],
}

text_map = np.empty(map.shape, dtype=str)
for x in range(map.shape[0]):
  for y in range(map.shape[1]):
    selected = False
    for biome in biomes:
      if map[x,y] >= biomes[biome][0] and map[x,y] <= biomes[biome][1]:
        text_map[x,y] = biome
        selected = True
        break
    if selected == False:
      text_map[x,y] = "G"


print(text_map)

oldJS = open("collection.js", "r")
oldCode = oldJS.read().split("/////")
oldJS.close()

map_str = ""
map_str += "["
for x in range(text_map.shape[0]):
    map_str += "["
    for y in range(text_map.shape[1]):
        map_str += "\""
        map_str += text_map[x, y]
        map_str += "\","
    map_str += "],"
map_str += "]"

map_str += "\n\nconst cMAP_NUM = ["
for x in range(text_map.shape[0]):
    map_str += "["
    for y in range(text_map.shape[1]):
        map_str += "\""
        map_str += str(random.randrange(3))
        map_str += "\","
    map_str += "],"
map_str += "]"

fullText = oldCode[0]+map_str+oldCode[1]

newJS = open("collection_2.js", "w")
newJS.write(fullText)
newJS.close()