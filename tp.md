1/  mkdir tpLinux
2/  ls
3/  cd tpLinux
    touch fic1.txt fic2.txt fichier.md image.jpeg exos.md exoos.txt
4/  mkdir dosA dosD dosA/dosB dosA/dosC
5/  mv fi* ./dosA/dosB
6/  cd ./dosA/dosB
    cp fic1.txt ../
    cp fic2.txt ../dosC
    cp fichier.md ../../dosD
7/  cd ../../
    echo "bonjour tout le monde" >> dosA/dosB/fic1.txt
    ls -l dosA/dosB/fic1.txt
8/  find ./ -name "*.???"
9/  mv ./exoos.txt ./exos.txt
10/ cd /workspaces/GpeMercredi
    touch supprimer.sh
    echo "rm -r ./tpLinux" >> supprimer.sh
    echo "tree" >> supprimer.sh
    chmod 777 supprimer.sh
    ./supprimer.sh