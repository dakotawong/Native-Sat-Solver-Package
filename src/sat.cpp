#include <iostream>
#include <string>
#include <vector>
#include "tseitinTransformer.h"
#include "treeNode.h"
#include "solver.h"
#include "parser.h"

void parseLine(const std::string &line, std::string &formulaStr) {
    // Declare start index
    size_t index = 0;
    
    // Check for empty line
    if (line.length() == 0) {
        return;
    }

    // Remove whitespace before formula string
    while (line.at(index) == ' ') {
        index++;
        if (index >= line.length()) {
            return;
        }
    }   

    // Process formula string
    for (size_t i = index; i < line.length(); i++) {
        formulaStr += line.at(i);
    }
}

// Program takes input string 'line' and determines satisfiability as 'sat' or 'unsat'
std::string sat(std::string line) {
    // store the formula string
    std::string formulaStr; 
    try {
        // Parse line
        parseLine(line, formulaStr);
        // Formula Parser
        FormulaParser *formula_parser = new FormulaParser(formulaStr);
        // Get root node of formula tree
        TreeNode *root = formula_parser->getTreeRoot();
        // Use tseitins transformation
        TseitinTransformer tseitins = TseitinTransformer(root);
        std::vector<std::vector<int>> cnf = tseitins.transform();
        
        // Check SAT or UNSAT of equiSAT formula
        Solver *SAT_Solver = new Solver(); 
        bool res = SAT_Solver->solve(cnf, tseitins.getVarNum());
        
        // Output results
        if (res == true) {
            return "sat";                    
        } else {
            return "unsat";
        }
        
    } catch (const char *message) {
        // Print any error messages
        return message;
    }
}
