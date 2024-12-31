#!/bin/bash

# Output file
output_file="../Results/roberta_model_results.txt"

# Loop to execute the program 500 times
for i in {1..3}; do
    echo "Execution $i"
    
    # Run the program and capture the specific lines
    python3 Executor.py #| grep -E "CAPTCHA|Generated Answer:|Context:|RoBerta" >> "$output_file"
    
   #  echo "" >> "$output_file"
done

echo "Execution completed. Results are stored in $output_file."
