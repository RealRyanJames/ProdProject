import { writeFile } from "fs";

type NameFile = string | unknown;

namespace ProjectConfig {
  export function Create(nameFile: NameFile, isCreate: boolean) {
    if (isCreate) {
      writeFile(String(nameFile), "", (err: any) => {
        if (err) {
          console.log("Err:" + err);
        }
      });
    }

    writeFile(String(nameFile), "", (err: any) => {
      if (err) {
        console.log("Err:" + err);
      }
    });
  }
}

export default ProjectConfig;
