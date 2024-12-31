#!/bin/bash

# Files to store results for each model
OPENAI_RESULTS="../Results/openai_model_results.txt"
FALCON_RESULTS="../Results/falcon_model_results.txt"
ROBERA_RESULTS="../Results/roberta_model_results.txt"

for i in {1..500}
do
    # Run the Python script and capture output
    python3 Executor.py | while read -r line
    do
        # Split the line by spaces
        first_word=$(echo $line | awk '{print $1}')

        # Check the first word and append to the corresponding file
        if [[ "$first_word" == "OpenAI" ]]; then
            echo "$line" >> $OPENAI_RESULTS
        elif [[ "$first_word" == "Falcon" ]]; then
            echo "$line" >> $FALCON_RESULTS
        elif [[ "$first_word" == "RoBerta" ]]; then
            echo "$line" >> $ROBERA_RESULTS
        fi
    done

    echo "Iteration $i completed"
done

echo "Results saved to $OPENAI_RESULTS, $FALCON_RESULTS, and $ROBERA_RESULTS."
