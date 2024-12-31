#!/bin/bash

# Output file to store results
output_file="../Results/captcha_results.txt"


# Run the Python script 1000 times
for i in {1..500}; do
    echo "Running iteration $i..."
    
    # Run the Python script and capture its output
    python solving_captcha.py | grep "Result:" >> "$output_file"

    # Optional: Add a blank line for readability between runs
    echo >> "$output_file"
done

echo "Completed 500 iterations. Results stored in $output_file."
