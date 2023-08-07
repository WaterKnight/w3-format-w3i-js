import { W3W3i as W3W3iKaitai } from './kaitai';
import KaitaiStream from './kaitai-struct/KaitaiStream';
import { W3W3i } from './model/W3W3i';

export const parse = (arrayBuffer: ArrayBuffer) => {
    const stream = new KaitaiStream(arrayBuffer);
    const data = new W3W3iKaitai(stream);
    return data as W3W3i;
}