import * as Yup from 'yup';
import Tool from '../models/Tool';

class ToolController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      link: Yup.string(),
      description: Yup.string(),
      tags: Yup.string().max(12),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const toolExist = await Tool.findOne({ where: { title: req.body.title } });

    if (toolExist) {
      return res.status(400).json({ error: 'Tool already exists' });
    }

    req.body.user_id = req.userId;
    const { id, title, description, tags, link } = await Tool.create(req.body);

    return res.status(201).json({
      id,
      title,
      description,
      tags,
      link,
    });
  }
}

export default new ToolController();
