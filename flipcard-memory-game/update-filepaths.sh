#! /bin/bash

filepaths=""

for filepath in ./img/*
    do 
        if [ "$filepaths" == "" ]; then
            filepaths="'.$filepath'"
        else
            filepaths="$filepaths,\n    '.$filepath'"
        fi
    done

printf "let filepaths = [\n    $filepaths\n];\n" > code/filepaths.js