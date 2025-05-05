import formTemplateService from '../../../../../app/services/FormTemplateService';

/**
 * API endpoint to get form templates by document type
 * @param {object} req - Next.js request object
 * @param {object} res - Next.js response object
 */
export default async function handler(req, res) {
  const { parentTypeId, childTypeId } = req.query;

  if (!parentTypeId || !childTypeId) {
    return res.status(400).json({ error: 'Parent type ID and child type ID are required' });
  }

  try {
    switch (req.method) {
      case 'GET':
        const formTemplate = await formTemplateService.getFormTemplateByDocumentType(parentTypeId, childTypeId);
        
        if (!formTemplate) {
          return res.status(404).json({ error: 'Form template not found for the specified document type' });
        }
        
        return res.status(200).json(formTemplate);
        
      default:
        return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error handling form template by document type request:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 