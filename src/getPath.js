import {packageDirectory} from 'pkg-dir';


export default async function getPath() {
    console.log(await packageDirectory());
}
