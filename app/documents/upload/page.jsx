'use client';

import DocumentUpload from '../../../components/app/DocumentUpload';
import { Box, Heading, Text, Container } from '@chakra-ui/react';

/**
 * Document upload page
 * @returns {JSX.Element} Document upload page component
 */
export default function DocumentUploadPage() {
  return (
    <Container maxW="container.xl" py={8}>
      <Box mb={8}>
        <Heading as="h1" size="xl" mb={2}>Document Management</Heading>
        <Text color="gray.600">
          Upload and manage document files with associated metadata.
        </Text>
      </Box>
      
      <DocumentUpload />
    </Container>
  );
} 