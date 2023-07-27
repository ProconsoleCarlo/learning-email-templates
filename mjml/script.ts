import mjml2html from 'mjml';
import fs from 'fs';
import { registerComponent } from 'mjml-core'
import MjImageText from './lib/MjImageText'

const mjml = fs.readFileSync('./templates/template.mjml', 'utf8');
registerComponent(MjImageText)
const htmlOutput = mjml2html(mjml);

fs.writeFileSync('./build/output.html', htmlOutput.html);