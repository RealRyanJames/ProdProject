import { writeFile } from "fs";

type NameFile = string | unknown;

namespace ProjectConfig {
  export function Create(
    nameFile: NameFile,
    isCreate: boolean,
    data: NameFile,
  ) {
    if (isCreate) {
      writeFile(String(nameFile), String(data), (err: any) => {
        if (err) {
          console.log("Err:" + err);
        }
      });
    }

    writeFile(String(nameFile), String(data), (err: any) => {
      if (err) {
        console.log("Err:" + err);
      }
    });
  }
}

export default ProjectConfig;
