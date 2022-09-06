'''
rules:
	jump: 2 blocks
	height: 1 block
'''

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import random

cWIDTH = 500
cHEIGHT = 500
cSEEDS = 5
cSHIFT = 1
cSINK = 1.5
cNUM_TOWNS = 20

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
# print(start_val)
num_islands = random.randrange(5, 11)
print(num_islands)
for x in range(num_islands):
    print(x)
    spread(map, (random.randrange(10, cWIDTH-10), random.randrange(10, cHEIGHT-10)), start_val)
print("Map created")

sunken = np.zeros((cWIDTH, cHEIGHT))
sink_start_val = random.randrange(10, 20)
# print(sink_start_val)
sink(map, (random.randrange(10, cWIDTH-10), random.randrange(10, cHEIGHT-10)), sink_start_val, sunken)

for x in range(cWIDTH):
  for y in range(cHEIGHT):
    map[x, y] -= sunken[x, y]
print("Sink added")

to_plot = map.transpose()
plt.imshow(to_plot)
plt.gca().invert_yaxis()
plt.colorbar()
plt.show()

# Grass Water Beach Mountain Volcano Cave
print("ADDING INFO")
biomes = {
    "M":[27, 50],
    "G":[17, 26],
    "B":[14, 16],
    "W":[-20, 13],
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

# add starting land
for x in range(20):
    for y in range(20):
        if x < 5 and y < 5:
            text_map[x,y] = "M"
        elif x < 10 and y < 10:
            text_map[x,y] = "G"
        elif x < 15 and y < 15:
            text_map[x,y] = "B"
        else:
            text_map[x,y] = "W"

print("Created text map")
# print(text_map)

oldJS = open("collection_3.js", "r")
oldCode = oldJS.read().split("// *****")
oldJS.close()

# Maps (Letters, numbers)
map_str = ""
map_str += "const cMAP = ["
for x in range(text_map.shape[0]):
    if x % 50 == 0:
        print(x)
    map_str += "["
    for y in range(text_map.shape[1]):
        map_str += "\""
        map_str += text_map[x, y]
        map_str += "\","
    map_str += "],"
map_str += "]"

map_str += "\n\nconst cMAP_NUM = ["
for x in range(text_map.shape[0]):
    if x % 50 == 0:
        print(x)
    map_str += "["
    for y in range(text_map.shape[1]):
        map_str += str(random.randrange(3))
        map_str += ","
    map_str += "],"
map_str += "]"

print("Added map 1")

def create_name(length=-1):
    if length == -1:
        length = random.randrange(4,9)
    examples = ["sika", "yukon", "adak", "vira", "vasa", "lupa", "orca", "sarps", "aren", "oslo", "bergen", "tasil", "keflak", "akran", "neska", "sedis", "lonsor", "sleiden", "vervi", "rukan", "byrn", "kavik"]
    letter_prob = {}
    for word in examples:
        for x in range(len(word)):
            try:
                letter_prob[word[x]].append(word[x+1])
            except KeyError:
                try:
                    letter_prob[word[x]] = [word[x+1]]
                except IndexError:
                    pass
            except IndexError:
                pass
    #create new
    new_place = ""
    for x in range(length):
        try:
            new_place += random.choice(letter_prob[new_place[-1]])
        except IndexError:
            new_place += random.choice(list(letter_prob.keys()))
    return new_place.capitalize()

def merge(name):
    parts = name.split(" ")
    string = ""
    for item in parts:
        string += item.lower().capitalize()
    return string

def dictionary_to_str(dictionary):
    string = "{"
    for x in dictionary:
        string += "\""
        string += x
        string += "\":["
        for y in range(len(dictionary[x])):
            if y == 0:
                # de string
                substring = "["
                for z in dictionary[x][y]:
                    substring += z
                    substring += ","
                substring += "],"
                string += substring
            else:
                string += str(dictionary[x][y])
                string += ","
        string += "],"
    string += "}"
    return string

print("Added Map")
# --------CHARACTERS--------

# character info
all_person_info = {}
char_info_str = ""
df = pd.read_csv("char_info.csv")
df = df.dropna(how="all")
for person in df["Name"]:
    all_person_info[person] = [[]]
    char_info_str += "\n"
    person_info = df.loc[df["Name"]==person].values.tolist()[0]
    # print(int(person_info["Number of Images"])+1)
    for x in range(1, int(person_info[2])+1):
        person_image_var_name = person.lower()+str(x)+"Img"
        all_person_info[person][0].append(person_image_var_name)
        char_info_str += "\nconst "
        char_info_str += str(person_image_var_name)
        char_info_str += " = new Image();\n"
        char_info_str += str(person_image_var_name)
        char_info_str += ".src = root+\""
        char_info_str += str(person_info[1])
        char_info_str += str(x)
        char_info_str += ".png\";"
    all_person_info[person].append(int(person_info[3]))
    # add speech image
    char_info_str += "\nconst "
    char_info_str += str(person.lower())
    char_info_str += "SpeechImg = new Image();\n"
    char_info_str += str(person.lower())
    char_info_str += "SpeechImg.src = root+\""
    try:
        char_info_str += str(person_info[4])
    except KeyError:
        pass
    char_info_str += ".png\";"
    all_person_info[person].append(str(person.lower()+"SpeechImg"))
    # add lines
    all_person_info[person].append([])
    for x in range(5, 27):
        if str(person_info[x]) == "":
            pass
        else:
            try:
                all_person_info[person][3].append(person_info[x].split("\\n"))
            except AttributeError:
                pass
char_info_str += "\n\nconst cPERSON_INFO = "
char_info_str += dictionary_to_str(all_person_info)

print("Added Characters")
# --------ITEMS--------

# item info
df = pd.read_csv("item_info.csv")
df = df.dropna(how="any")
item_info_str = ""
all_item_info = {}
all_item_spawning = {
    "M":[],
    "G":[],
    "B":[],
    "W":[],
}
extra_str = "let creatures_discovered = {\n"
for item in df["Official Name"]:
    all_item_info[item] = [[]]
    item_info_str += "\n"
    item_info = df.loc[df["Official Name"]==item].values.tolist()[0]
    # Creature(0) Biome(1) Rarity(2) Price(3) Official Name(4) Item Image Name(5) Number of Images(6) Frame Wait(7) Description (8)
    # defining images
    for x in range(1, int(item_info[6])+1):
        item_image_var_name = merge(item_info[4])+str(x)+"Img"
        item_info_str += "\nconst "
        item_info_str += item_image_var_name
        item_info_str += " = new Image();\n"
        item_info_str += item_image_var_name
        item_info_str += ".src = root+\""
        item_info_str += item_info[5] # tomato-bunny-
        item_info_str += str(x) # 1
        item_info_str += ".png\";"
        all_item_info[item][0].append(item_image_var_name)
    # creature info
    all_item_info[item].append(item_info[7])
    all_item_info[item].append(item_info[2]*10)
    all_item_info[item].append(item_info[3])
    all_item_info[item].append(str("\""+item_info[8]+"\""))
    # spawning
    for biome in item_info[1]:
        all_item_spawning[biome].append(item)
    
    extra_str += "\""
    extra_str += item_info[4]
    extra_str += "\":false,\n"
extra_str += "}"

item_info_str += "\n\nconst cCREATURE_INFO = "
item_info_str += dictionary_to_str(all_item_info)
item_info_str += ";\n\nconst cSPAWNING_INFO = "
item_info_str += str(all_item_spawning)
item_info_str += ";"

print("Added Items")
# --------TOWNS--------

town_setups = [[
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "B", "B", "B", "G", "G", "G", "G", "G", "G"],
    ["G", "B", "H", "B", "G", "G", "G", "G", "G", "G"],
    ["G", "B", "B", "B", "G", "G", "G", "H", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "H", "H", "G", "G", "G", "G"],
    ["G", "G", "S", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "H", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "X", "G", "G", "G", "G", "G"],
], [
    ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M"],
    ["M", "H", "M", "M", "G", "G", "M", "M", "H", "M"],
    ["M", "M", "M", "G", "G", "G", "G", "M", "M", "M"],
    ["M", "M", "G", "G", "G", "H", "G", "G", "M", "M"],
    ["M", "G", "G", "M", "G", "G", "G", "G", "G", "M"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "H", "H", "G", "S", "G", "G", "H", "H", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["H", "G", "G", "G", "G", "G", "G", "G", "G", "M"],
    ["G", "G", "G", "G", "X", "G", "G", "G", "M", "M"],
], [
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "S", "G", "G", "G", "G"],
    ["G", "H", "G", "G", "G", "G", "G", "G", "H", "G"],
    ["G", "G", "G", "G", "B", "B", "G", "G", "G", "G"],
    ["G", "H", "G", "B", "W", "W", "B", "G", "H", "G"],
    ["G", "G", "G", "B", "W", "W", "B", "G", "G", "G"],
    ["G", "H", "G", "G", "B", "B", "G", "G", "H", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "H", "G", "G", "G", "G", "G", "G", "H", "G"],
    ["G", "G", "G", "G", "X", "G", "G", "G", "G", "G"],
]]

num_skins = {
    "W":3,
    "G":3,
    "B":3,
    "M":3,
    "X":1,
    "H":5,
    "S":1
}

town_str = ""
town_str += "\nlet town_locs = ["

for i in range(int(cNUM_TOWNS/2)):
    while True:
        random_loc = [random.randrange(20, cWIDTH), random.randrange(20, cHEIGHT)] # 40 for start buffer
        if text_map[random_loc[1], random_loc[0]] != "W":
            break
    houses = []
    selected_town = random.choice(town_setups)
    town_nums = []
    for x in range(len(selected_town)):
        town_nums.append([])
        for y in range(len(selected_town[x])):
            town_nums[x].append(random.randrange(num_skins[selected_town[x][y]]))
            if selected_town[x][y] == "H":
                random_person = random.choice(list(all_person_info.keys()))
                houses.append([random_person, [x, y]])
    town_str += "[\""
    town_str += create_name()
    town_str += "\","
    town_str += str(random_loc)
    town_str += ","
    town_str += str(selected_town)
    town_str += ","
    town_str += str(town_nums)
    town_str += ","
    town_str += str(houses)
    town_str += ", false],"

for i in range(int(cNUM_TOWNS/2)):
    random_loc = [random.randrange(cWIDTH), random.randrange(cHEIGHT)]
    houses = []
    selected_town = random.choice(town_setups)
    town_nums = []
    for x in range(len(selected_town)):
        town_nums.append([])
        for y in range(len(selected_town[x])):
            town_nums[x].append(random.randrange(num_skins[selected_town[x][y]]))
            if selected_town[x][y] == "H":
                random_person = random.choice(list(all_person_info.keys()))
                houses.append([random_person, [x, y]])

    town_str += "[\""
    town_str += create_name()
    town_str += "\","
    town_str += str(random_loc)
    town_str += ","
    town_str += str(selected_town)
    town_str += ","
    town_str += str(town_nums)
    town_str += ","
    town_str += str(houses)
    town_str += ", false],"



random_loc = [7, 7]
houses = []
selected_town = random.choice(town_setups)
town_nums = []
for x in range(len(selected_town)):
    town_nums.append([])
    for y in range(len(selected_town[x])):
        town_nums[x].append(random.randrange(num_skins[selected_town[x][y]]))
        if selected_town[x][y] == "H":
            random_person = random.choice(list(all_person_info.keys()))
            houses.append([random_person, [x, y]])
town_str += "[\""
town_str += create_name()
town_str += "\","
town_str += str(random_loc)
town_str += ","
town_str += str(selected_town)
town_str += ","
town_str += str(town_nums)
town_str += ","
town_str += str(houses)
town_str += ", false],"

town_str += "]"

print("Added Towns")

# --------CLOTHES--------
import os
clothes_info_str = ""
clothes_buy_info = "let sky_clothes_info = {\n"

for filename in os.listdir("./Images/collection/clothes"):
    p = os.path.join("./Images/collection/clothes", filename)
    if os.path.isfile(p):
        clothes_info_str += "\nconst "
        clothes_info_str += filename.split(".")[0]
        clothes_info_str += "Img = new Image();\n"
        clothes_info_str += filename.split(".")[0]
        clothes_info_str += "Img.src = \""
        clothes_info_str += p
        clothes_info_str += "\";"
        
        clothes_buy_info += "\t\""
        clothes_buy_info += filename.split(".")[0]
        clothes_buy_info += "\": ["
        clothes_buy_info += filename.split(".")[0]
        clothes_buy_info += "Img, 250, false, false],\n"

clothes_buy_info += "}\n"

# --- CAVES ---

def print_map(map):
	string = ""
	for row in map:
		for val in row:
			string += val
		string += "\n"
	print(string)

cave_map_str = "const cCAVE_MAP = ["

for x in range(random.randrange(1, 100)):
    # create base
    length = random.randrange(15, 100)

    heights = [0]
    current_height = 0
    for x in range(length-1):
        change = random.choice([0]*10+[1]*5+[-1]*5+[2]*1+[-2]*1)
        heights.append(current_height+change)
        current_height += change

    # plt.plot(list(range(length)), heights)
    # plt.show()

    # create ceiling
    ceiling_heights = []
    for x in range(length):
        if x == 0:
            h = max(heights[x:x+2])
        else:
            h = max(heights[x-1:x+2])
        change = random.choice([1, 2, 3])
        ceiling_heights.append(h+change)

    # plt.plot(list(range(length)), ceiling_heights)
    # plt.show()


    # create string
    base = min(ceiling_heights+heights)
    map = []
    for x in range(length):
        for y in range(max(ceiling_heights+heights)-base):
            if x == 0:
                map.append([])
            if y < heights[x]-base or y > ceiling_heights[x]-base:
                map[y].append("x")
            else:
                map[y].append(" ")
        map[y].append("x")

    map = [[["x"]*length] + map + [["x"]*length]]
    
    cave_map_str += "[["
    cave_map_str += str(random.randrange(cWIDTH))
    cave_map_str += ","
    cave_map_str += str(random.randrange(cWIDTH))
    cave_map_str += "],"
    cave_map_str += str(map)
    cave_map_str += "], "
    # WIP - if want to add type: "Normal, Volcano, Water, etc"

cave_map_str += "]\n"

print(cave_map_str)

# # Putting together
fullText = oldCode[0]+"\n"+map_str+"\n"+char_info_str+"\n"+item_info_str+town_str+"\n"+extra_str+"\n"+clothes_info_str+"\n"+clothes_buy_info+"\n"+cave_map_str+"\n"+oldCode[2]

newJS = open("collection_py.js", "w")
newJS.write(fullText)
newJS.close()
print("Done")