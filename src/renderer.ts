

import './index.css';

import { pipeline, PretrainedConfig } from '@xenova/transformers';
import { env } from '@xenova/transformers';
import { AutoModelForCausalLM, AutoTokenizer } from '@xenova/transformers';
import { AutoConfig } from '@xenova/transformers';
import axios from 'axios';

(async() {
    // Allocate a pipeline for sentiment-analysis
    env.allowRemoteModels = false;
    env.localModelPath = 'main_window/models/';
    env.useFS = false
    let pipe = await pipeline('text-generation', 'quantized_solidity_generator_onnx');
    //let out = await pipe('pragma');
})()
