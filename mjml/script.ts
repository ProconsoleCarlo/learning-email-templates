import mjml2html from 'mjml';
import fs from 'fs';

const mjml = fs.readFileSync('./templates/template.mjml', 'utf8');
const htmlOutput = mjml2html(mjml);

fs.writeFileSync('./build/output.html', htmlOutput.html);