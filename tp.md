1/  mkdir tpLinux <br>
2/  ls <br>
3/  cd tpLinux
    touch fic1.txt fic2.txt fichier.md image.jpeg exos.md exoos.txt <br>
4/  mkdir dosA dosD dosA/dosB dosA/dosC <br>
5/  mv fi* ./dosA/dosB <br>
6/  cd ./dosA/dosB <br>
    cp fic1.txt ../ <br>
    cp fic2.txt ../dosC <br>
    cp fichier.md ../../dosD <br>
7/  cd ../../ <br>
    echo "bonjour tout le monde" >> dosA/dosB/fic1.txt <br>
    ls -l dosA/dosB/fic1.txt <br>
8/  find ./ -name "*.???" <br>
9/  mv ./exoos.txt ./exos.txt <br>
10/ cd /workspaces/GpeMercredi <br>
    touch supprimer.sh <br>
    echo "rm -r ./tpLinux" >> supprimer.sh <br>
    echo "tree" >> supprimer.sh <br>
    chmod 777 supprimer.sh <br>
    ./supprimer.sh <br>