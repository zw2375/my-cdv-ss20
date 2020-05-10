import csv,requests,json
from pprint import pprint
token = "224402655546228"
baseURL = "https://superheroapi.com/api/" + token +"/search/"

response = requests.get(baseURL + "superman")




first_line = True
allheroes = []
keys = []
skiphero = 220

with open('heroes_information.csv', newline='') as csvfile:
    heroes = csv.reader(csvfile, delimiter=',')
    for herocount, row in enumerate(heroes, -1):
        if first_line is True:
            keys = row
            first_line = False
        else:
            if herocount < skiphero:
                continue
            hero = {}
            print("current at hero number", herocount)
            for i,key in enumerate(keys[1:], 1):
                hero[key] = row[i]
                if key == "name":
                    name = row[i]
                    print("Getting img link for ", name)
                    response = requests.get(baseURL + name)
                    object = response.json()
                    print(object)
                    if object["response"] != "error":
                        url = object["results"][0]["image"]["url"]
                        hero["imgURL"] = url

                   # deal with api here

            #
            allheroes.append(hero)
            with open("heroes220.json","w") as f:
                json.dump(allheroes, f, indent=2)
            first_hero = False
            # with open('heroes_'+str(herocount)+'.json', 'w') as f:
            #     json.dump(allheroes, f, indent=2)
            # first_hero = False
