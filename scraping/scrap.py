import requests
from bs4 import BeautifulSoup

# Envoyer une requête HTTP à la page Web
url = 'https://www.prettylittlething.fr/prettylittlehting-soutien-gorge-long-en-dentelle-noire-a-armatures-en-perles.html'
response = requests.get(url)

# Créer un objet Beautiful Soup à partir du contenu HTML de la page Web
soup = BeautifulSoup(response.content, 'html.parser')

# Utiliser les fonctions de recherche et de filtrage de Beautiful Soup pour trouver toutes les balises HTML qui contiennent des URL d'images
img_tags = soup.find_all('img', {'src': lambda x: x and x.startswith('https://cdn-img.prettylittlething.com/')})

# Parcourir tous les éléments trouvés pour extraire les URL des images
image_urls = []
for img in img_tags:
    image_url = img.get('src')
    image_urls.append(image_url)

# Afficher les URL des images
for url in image_urls:
    print(url)

with open("liste.txt", "a") as f:
    for url in image_urls:
        f.write(url + "\n")