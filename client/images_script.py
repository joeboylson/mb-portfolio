import os
import json

def path_to_dict(path):
    d = {'name': os.path.basename(path)}
    if os.path.isdir(path):
        d['type'] = "directory"
        d[os.path.basename(path)] = [path_to_dict(os.path.join(path,x)) for x in os.listdir(path)]
    else:
        d['type'] = "file"
    return d

images_json = json.dumps(path_to_dict('./public/images'))

with open ('images.json', 'w+') as json_file:
  json_file.write( images_json )

