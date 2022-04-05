import pandas as pd

'''
<div class="card-deck">
    <div class="card" style="width: 1rem;">
        <img class="card-img-top" src="./Images/collection/business-goose-1.png">
        <div class="card-body">
            <h5 class="card-title">Business Goose</h5>
            <p class="card-text">This is my GitHub repository containing the final projects from Year 1 of BridgeUP: STEM. Please note that they are not cleaned up and organized.</p>
            <br>
        </div>
    </div>
</div>'''


TABBING = "        "
biome_names = {
    "M":"Snow",
    "G":"Grass",
    "B":"Sand",
    "W":"Water",
}

file = open("collection_cards.html", "r")
content = file.read().split("<!-- ***** -->")
file.close()

new_file = content[0]
new_file += "<!-- ***** -->\n"

df = pd.read_csv("item_info.csv")
df = df.dropna(how="any")
for x in range(int((len(df["Official Name"])/5)+0.5)):
    new_file += TABBING
    new_file += "<div class=\"card-deck\">\n"
    for y in range(5):
        if (x*5+y > len(df["Official Name"])):
            break
        new_file += TABBING
        new_file += "     <div class=\"card\">\n"
        new_file += TABBING
        new_file += "         <img class=\"card-img-top\" src=\"./Images/collection/"
        new_file += list(df["Item Image Name"])[(x*5)+y]
        new_file += "1.png\">\n"

        new_file += TABBING
        new_file += "         <div class=\"card-body\">\n"
        new_file += TABBING
        new_file += "             <h5 class=\"card-title\">"
        new_file += list(df["Official Name"])[(x*5)+y]
        new_file += "</h5>\n"

        new_file += TABBING
        new_file += "             <p class=\"card-text\">Appears in "
        new_file += biome_names[list(df["Biome"])[(x*5)+y][0]]
        for b in range(1, len([list(df["Biome"])[(x*5)+y]])):
            new_file += ", "
            try:
                new_file += biome_names[list(df["Biome"])[(x*5)+y][b]]
            except IndexError:
                pass
        new_file += "</p>\n"

        new_file += TABBING
        new_file += "         </div>\n"
        new_file += TABBING
        new_file += "     </div>\n"
        # Creature(0) Biome(1) Rarity(2) Price(3) Official Name(4) Item Image Name(5) Number of Images(6) Frame Wait(7)
    new_file += TABBING
    new_file += "</div>\n"
    

new_file += TABBING
new_file += "<!-- ***** -->\n"
new_file += content[-1]

file = open("collection_cards.html", "w")
file.write(new_file)
file.close()