import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Id', width: 60,sortable: false, },
   {
    field: 'sub_Section_id',
    headerName: 'Sub Section Id',
    width: 100,
    editable: true,
    sortable: false,
  },
  {
    field: 'mandatory',
    headerName: 'Mandatory',
    type: 'number',
    width: 70,
    editable: true,
    sortable: false,
  },
  {
    field: 'matrix',
    headerName: 'Matrix',
    width: 80,
    editable: true,
    sortable: false,
  },
  {
    field: 'petAntibiotics',
    headerName: 'Pet Antibiotics',
    width: 90,
    editable: true,
    sortable: false,
  },
   {
    field: 'variablevalue',
    headerName: 'Variable Value',
    width: 300,
    editable: true,
    sortable: false,
  },
  {
    field: 'result',
    headerName: 'Result',
    width: 300,
    editable: true,
    sortable: false,
  },
];

const rows = [
        {
          "id": "1",
          "sub_Section_id": "descriptionTitle",
          "mandatory": "1",
          "matrix": "TRUE",
          "petAntibiotics": "TRUE",
          "variablevalue": "",
          "result": "What is Bacterial Diversity?"
        },
        {
          "id": "2",
          "sub_Section_id": "description",
          "mandatory": "0",
          "matrix": "adult",
          "petAntibiotics": "TRUE",
          "variablevalue": "(matrix == 'Geriatric' or matrix == 'Senior' or matrix == 'Adult')",
          "result": "Bacterial diversity shows how many different species of bacteria are present and how evenly these species are spread across ${possessivePetName} sample. High microbial diversity has been linked with digestive health[1]. Decreased diversity can be associated with being overweight[2]. In addition, some antibiotics can decrease diversity of bacteria in the gut and may also decrease levels of beneficial bacteria[3]. Use of certain probiotics can help maintain and restore beneficial bacteria and microbial diversity during antibiotic therapy[4]."
        },
        {
          "id": "3",
          "sub_Section_id": "description",
          "mandatory": "0",
          "matrix": "senior",
          "petAntibiotics": "TRUE",
          "variablevalue": "(matrix == 'Geriatric' or matrix == 'Senior' or matrix == 'Adult')",
          "result": "Bacterial diversity shows how many different species of bacteria are present and how evenly these species are spread across ${possessivePetName} sample. High microbial diversity has been linked with digestive health[1]. Decreased diversity can be associated with being overweight[2]. In addition, some antibiotics can decrease diversity of bacteria in the gut and may also decrease levels of beneficial bacteria[3]. Use of certain probiotics can help maintain and restore beneficial bacteria and microbial diversity during antibiotic therapy[4]."
        },
        {
          "id": "4",
          "sub_Section_id": "description",
          "mandatory": "0",
          "matrix": "geriatric",
          "petAntibiotics": "TRUE",
          "variablevalue": "(matrix == 'Geriatric' or matrix == 'Senior' or matrix == 'Adult')",
          "result": "Bacterial diversity shows how many different species of bacteria are present and how evenly these species are spread across ${possessivePetName} sample. High microbial diversity has been linked with digestive health[1]. Decreased diversity can be associated with being overweight[2]. In addition, some antibiotics can decrease diversity of bacteria in the gut and may also decrease levels of beneficial bacteria[3]. Use of certain probiotics can help maintain and restore beneficial bacteria and microbial diversity during antibiotic therapy[4]."
        },
        {
          "id": "5",
          "sub_Section_id": "description",
          "mandatory": "0",
          "matrix": "kitten",
          "petAntibiotics": "TRUE",
          "variablevalue": "(matrix != 'Geriatric' and matrix != 'Senior' and matrix != 'Adult')",
          "result": "Bacterial diversity represents the community of different bacteria in the gut. This is determined by measuring ${possessivePetName} relative abundance of each species present in ${possessivePronoun} sample. Many of these bacteria species have beneficial functions, so high diversity has been linked with digestive health[1]."
        },
        {
          "id": "6",
          "sub_Section_id": "description",
          "mandatory": "0",
          "matrix": "puppy",
          "petAntibiotics": "TRUE",
          "variablevalue": "(matrix != 'Geriatric' and matrix != 'Senior' and matrix != 'Adult')",
          "result": "Bacterial diversity represents the community of different bacteria in the gut. This is determined by measuring ${possessivePetName} relative abundance of each species present in ${possessivePronoun} sample. Many of these bacteria species have beneficial functions, so high diversity has been linked with digestive health[1]."
        },
        {
          "id": "7",
          "sub_Section_id": "altWordingInfoTitle",
          "mandatory": "1",
          "matrix": "TRUE",
          "petAntibiotics": "TRUE",
          "variablevalue": "",
          "result": "Results"
        },
        {
          "id": "8",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "adult",
          "petAntibiotics": "No",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'low') and (petAntibiotics != 'Yes'))",
          "result": "${possessivePetName} bacterial diversity was below the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "9",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "kitten",
          "petAntibiotics": "No",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'low') and (petAntibiotics != 'Yes'))",
          "result": "${possessivePetName} bacterial diversity was below the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "10",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "puppy",
          "petAntibiotics": "No",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'low') and (petAntibiotics != 'Yes'))",
          "result": "${possessivePetName} bacterial diversity was below the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "11",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "adult",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'average-low'))",
          "result": "${possessivePetName} bacterial diversity is on the lower end of our average of healthy ${petAgeDesc} ${collection}."
        },
        {
          "id": "12",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "kitten",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'average-low'))",
          "result": "${possessivePetName} bacterial diversity is on the lower end of our average of healthy ${petAgeDesc} ${collection}."
        },
        {
          "id": "13",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "puppy",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'average-low'))",
          "result": "${possessivePetName} bacterial diversity is on the lower end of our average of healthy ${petAgeDesc} ${collection}."
        },
        {
          "id": "14",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "adult",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'normal'))",
          "result": "${possessivePetName} bacterial diversity was within the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "15",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "kitten",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'normal'))",
          "result": "${possessivePetName} bacterial diversity was within the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "16",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "puppy",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'normal'))",
          "result": "${possessivePetName} bacterial diversity was within the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "17",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "adult",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'high'))",
          "result": "${possessivePetName} bacterial diversity was above the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "18",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "kitten",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'high'))",
          "result": "${possessivePetName} bacterial diversity was above the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "19",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "puppy",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'high'))",
          "result": "${possessivePetName} bacterial diversity was above the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "20",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "adult",
          "petAntibiotics": "Yes",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'low') and (petAntibiotics == 'Yes'))",
          "result": "${possessivePetName} bacterial diversity was below the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "21",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "kitten",
          "petAntibiotics": "Yes",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'low') and (petAntibiotics == 'Yes'))",
          "result": "${possessivePetName} bacterial diversity was below the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "22",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "puppy",
          "petAntibiotics": "Yes",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'low') and (petAntibiotics == 'Yes'))",
          "result": "${possessivePetName} bacterial diversity was below the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "23",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "senior",
          "petAntibiotics": "No",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'low') and (petAntibiotics != 'Yes'))",
          "result": "${possessivePetName} bacterial diversity was below the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "24",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "geriatric",
          "petAntibiotics": "No",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'low') and (petAntibiotics != 'Yes'))",
          "result": "${possessivePetName} bacterial diversity was below the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "25",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "senior",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'average-low'))",
          "result": "${possessivePetName} bacterial diversity is on the lower end of our average of healthy ${petAgeDesc} ${collection}."
        },
        {
          "id": "26",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "geriatric",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'average-low'))",
          "result": "${possessivePetName} bacterial diversity is on the lower end of our average of healthy ${petAgeDesc} ${collection}."
        },
        {
          "id": "27",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "senior",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'normal'))",
          "result": "${possessivePetName} bacterial diversity was within the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "28",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "geriatric",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'normal'))",
          "result": "${possessivePetName} bacterial diversity was within the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "29",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "senior",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'high'))",
          "result": "${possessivePetName} bacterial diversity was above the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "30",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "geriatric",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'high'))",
          "result": "${possessivePetName} bacterial diversity was above the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "31",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "senior",
          "petAntibiotics": "Yes",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'low') and (petAntibiotics == 'Yes'))",
          "result": "${possessivePetName} bacterial diversity was below the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "32",
          "sub_Section_id": "altWordingInfo",
          "mandatory": "0",
          "matrix": "geriatric",
          "petAntibiotics": "Yes",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'low') and (petAntibiotics == 'Yes'))",
          "result": "${possessivePetName} bacterial diversity was below the reference range for ${petAgeDesc} ${collection}."
        },
        {
          "id": "33",
          "sub_Section_id": "altWordingActionTitle",
          "mandatory": "1",
          "matrix": "TRUE",
          "petAntibiotics": "TRUE",
          "variablevalue": "",
          "result": "Actions to Take"
        },
        {
          "id": "34",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "adult",
          "petAntibiotics": "No",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'low') and (petAntibiotics != 'Yes'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding a prebiotic fiber and the right probiotic strain can help support a balanced diversity of bacteria. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "35",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "kitten",
          "petAntibiotics": "No",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'low') and (petAntibiotics != 'Yes'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding a prebiotic fiber and the right probiotic strain can help support a balanced diversity of bacteria. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "36",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "puppy",
          "petAntibiotics": "No",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'low') and (petAntibiotics != 'Yes'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding a prebiotic fiber and the right probiotic strain can help support a balanced diversity of bacteria. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "37",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "adult",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'average-low'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding a prebiotic fiber and the right probiotic strain can help support a balanced diversity of bacteria. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "38",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "kitten",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'average-low'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding a prebiotic fiber and the right probiotic strain can help support a balanced diversity of bacteria. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "39",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "puppy",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'average-low'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding a prebiotic fiber and the right probiotic strain can help support a balanced diversity of bacteria. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "40",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "adult",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'normal'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding prebiotic fiber can help maintain balanced bacterial diversity. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "41",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "kitten",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'normal'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding prebiotic fiber can help maintain balanced bacterial diversity. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "42",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "puppy",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'normal'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding prebiotic fiber can help maintain balanced bacterial diversity. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "43",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "adult",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'high'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding prebiotic fiber can help maintain balanced bacterial diversity. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "44",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "kitten",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'high'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding prebiotic fiber can help maintain balanced bacterial diversity. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "45",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "puppy",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'high'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding prebiotic fiber can help maintain balanced bacterial diversity. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "46",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "adult",
          "petAntibiotics": "Yes",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'low') and (petAntibiotics == 'Yes'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding a prebiotic fiber and the right probiotic strain can help support a balanced diversity of bacteria during and after ${possessivePetName} antibiotic treatment. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "47",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "kitten",
          "petAntibiotics": "Yes",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'low') and (petAntibiotics == 'Yes'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding a prebiotic fiber and the right probiotic strain can help support a balanced diversity of bacteria during and after ${possessivePetName} antibiotic treatment. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "48",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "puppy",
          "petAntibiotics": "Yes",
          "variablevalue": "((matrix == 'Adult' or matrix == 'Kitten' or matrix == 'Puppy') and (diversityclassification == 'low') and (petAntibiotics == 'Yes'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding a prebiotic fiber and the right probiotic strain can help support a balanced diversity of bacteria during and after ${possessivePetName} antibiotic treatment. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "49",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "senior",
          "petAntibiotics": "No",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'low') and (petAntibiotics != 'Yes'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding a prebiotic fiber and the right probiotic strain can help support a balanced diversity of bacteria and restore ${possessivePetName} diversity to healthy ${petAgeDesc} levels. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "50",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "geriatric",
          "petAntibiotics": "No",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'low') and (petAntibiotics != 'Yes'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding a prebiotic fiber and the right probiotic strain can help support a balanced diversity of bacteria and restore ${possessivePetName} diversity to healthy ${petAgeDesc} levels. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "51",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "senior",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'average-low'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding a prebiotic fiber and the right probiotic strain can help support a balanced diversity of bacteria and restore ${possessivePetName} diversity to healthy ${petAgeDesc} levels. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "52",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "geriatric",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'average-low'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding a prebiotic fiber and the right probiotic strain can help support a balanced diversity of bacteria and restore ${possessivePetName} diversity to healthy ${petAgeDesc} levels. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "53",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "senior",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'normal'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding prebiotic fiber can help maintain balanced bacterial diversity. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "54",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "geriatric",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'normal'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding prebiotic fiber can help maintain balanced bacterial diversity. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "55",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "senior",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'high'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding prebiotic fiber can help maintain balanced bacterial diversity. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "56",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "geriatric",
          "petAntibiotics": "TRUE",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'high'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding prebiotic fiber can help maintain balanced bacterial diversity. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "57",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "senior",
          "petAntibiotics": "Yes",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'low') and (petAntibiotics == 'Yes'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding a prebiotic fiber and the right probiotic strain can help support a balanced diversity of bacteria during and after ${possessivePetName} antibiotic treatment. Our personalized recommended nutrition solutions take this into account."
        },
        {
          "id": "58",
          "sub_Section_id": "altWordingAction",
          "mandatory": "0",
          "matrix": "geriatric",
          "petAntibiotics": "Yes",
          "variablevalue": "((matrix == 'Geriatric' or matrix == 'Senior') and (diversityclassification == 'low') and (petAntibiotics == 'Yes'))",
          "result": "It's important to support a balanced diversity of bacteria in your pet's gut throughout their life. Feeding a prebiotic fiber and the right probiotic strain can help support a balanced diversity of bacteria during and after ${possessivePetName} antibiotic treatment. Our personalized recommended nutrition solutions take this into account."
        },
      
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5,10,25]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}