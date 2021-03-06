import pandas as pd
import random

cWIDTH = 100
cHEIGHT = 75
cNUM_TOWNS = 2

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
char_info_str += str(all_person_info)

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
for item in df["Official Name"]:
    all_item_info[item] = [[]]
    item_info_str += "\n"
    item_info = df.loc[df["Official Name"]==item].values.tolist()[0]
    # Creature(0) Biome(1) Rarity(2) Price(3) Official Name(4) Item Image Name(5) Number of Images(6) Frame Wait(7) Description (8)
    # defining images
    for x in range(1, int(item_info[6])+1):
        item_image_var_name = merge(item_info[4])+str(x)
        item_info_str += "\nconst "
        item_info_str += item_image_var_name
        item_info_str += "Img = new Image();\n"
        item_info_str += item_image_var_name
        item_info_str += ".src = root+\""
        item_info_str += item_info[5] # tomato-bunny-
        item_info_str += str(x) # 1
        item_info_str += ".png\";"
        all_item_info[item][0].append(item_image_var_name)
    # creature info
    all_item_info[item].append(item_info[7])
    all_item_info[item].append(item_info[2])
    all_item_info[item].append(item_info[3])
    all_item_info[item].append(item_info[8])
    # spawning
    for biome in item_info[1]:
        all_item_spawning[biome].append(item)

item_info_str += "\n\nconst cCREATURE_INFO = "
item_info_str += dictionary_to_str(all_item_info)
item_info_str += "\n\nconst cSPAWNING_INFO = "
item_info_str += str(all_item_spawning)

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
    ["S", "G", "G", "G", "G", "G", "G", "G", "G", "M"],
    ["G", "G", "G", "G", "X", "G", "G", "G", "M", "M"],
], [
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "S", "G", "G", "G", "G"],
    ["G", "H", "G", "G", "G", "G", "G", "H", "G", "G"],
    ["G", "G", "G", "G", "B", "B", "G", "G", "G", "G"],
    ["G", "H", "G", "B", "W", "W", "B", "H", "G", "G"],
    ["G", "G", "G", "B", "W", "W", "B", "G", "G", "G"],
    ["G", "H", "G", "G", "B", "B", "G", "H", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "H", "G", "G", "G", "G", "G", "H", "G", "G"],
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
town_str += "let town_locs = ["

for i in range(cNUM_TOWNS):
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

town_str += "]"
print(town_str)