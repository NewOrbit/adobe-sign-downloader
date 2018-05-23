import * as fs from "fs";

export default (buffer: Buffer, name: string) => {
    const filePath = `download/${name}.pdf`;

    fs.writeFile(filePath, buffer, (err) => {
        if (err) throw err;

        console.log(`File saved as '${filePath}'`);
      });
};
