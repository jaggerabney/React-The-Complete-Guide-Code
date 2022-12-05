for dir in */; do 
    printf "\nMoving into $dir..."
    cd $dir
    printf "done!"

    printf "\nLooking for node_modules in $dir..."
    
    if [ -d "node_modules" ]; then
        printf "found! Skipping...\n"

        cd ..
        continue
    fi

    printf "\nLooking for package.json in $dir..."
    
    if [ -f "package.json" ]; then
        printf "found! Running npm install...\n"
        
        npm install --silent

        cd ..
        continue
    fi

    printf "\nCouldn't find node_modules or package.json in $dir :(\n"
    cd ..
done