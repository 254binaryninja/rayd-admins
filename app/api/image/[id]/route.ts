import { connectToDatabase } from '@/database';
import Blog from '@/database/models/blogs';
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();

    const { id } = await params;

    const blogPost = await Blog.findById(id).select("image imageType");
    if (!blogPost || !blogPost.image) {
      return new Response('Image not found', { status: 404 });
    }

    // Return the image as a binary stream with the correct content type
    return new Response(blogPost.image, {
      status: 200,
      headers: {
        'Content-Type': blogPost.imageType || 'image/jpeg',
        'Cache-Control': 'public, max-age=86400' // Cache for 24 hours
      }
    });
  } catch (error: any) {
    console.error('Error fetching image:', error);
    return new Response('Error loading image', { status: 500 });
  }
}
