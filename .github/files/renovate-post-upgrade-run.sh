#!/bin/bash

FILE="changelog/$( sed 's!/!-!g' <<<"$1" )"
echo "Creating file $FILE"
echo "Renovate update" > "$FILE"
