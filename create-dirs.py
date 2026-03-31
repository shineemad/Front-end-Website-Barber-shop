import os
from pathlib import Path

base_dir = r'c:\MY CODE\my codingan\Web Barber'
dirs = [
    'src',
    'src/components',
    'src/components/ui',
    'src/components/layout',
    'src/components/sections',
    'src/constants',
    'src/utils',
    'src/hooks',
    'public'
]

print(f"Creating directories in: {base_dir}\n")

for dir_path in dirs:
    full_path = os.path.join(base_dir, dir_path)
    Path(full_path).mkdir(parents=True, exist_ok=True)
    print(f"✓ Created: {dir_path}")

print('\nDirectory structure created successfully!\n')
print('Verifying directory structure:')
print('================================\n')

def list_dirs(directory, indent=''):
    items = sorted(os.listdir(directory))
    for item in items:
        full_path = os.path.join(directory, item)
        if os.path.isdir(full_path):
            print(f"{indent}📁 {item}/")
            list_dirs(full_path, indent + '  ')

list_dirs(base_dir)
