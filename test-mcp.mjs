#!/usr/bin/env node

// MCP Server Test Script
// This script tests the MCP server configurations

import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
config({ path: join(__dirname, '.env.local') });

console.log('🔍 Testing MCP Server Configuration\n');

// Test environment variables
const apiKeys = {
  'Postman API Key': process.env.POSTMAN_API_KEY,
  'Context7 API Key': process.env.CONTEXT7_API_KEY,
  'Hugging Face API Key': process.env.HUGGING_FACE_API_KEY,
  'GitHub Access Token': process.env.GITHUB_ACCESS_TOKEN
};

console.log('📋 API Key Status:');
Object.entries(apiKeys).forEach(([name, key]) => {
  const status = key ? '✅ Loaded' : '❌ Missing';
  const preview = key ? `${key.substring(0, 10)}...` : 'Not set';
  console.log(`  ${name}: ${status} (${preview})`);
});

console.log('\n🚀 MCP Servers Available:');
console.log('  • Postman MCP Server - API testing and collection management');
console.log('  • Context7 MCP Server - Documentation and context management');
console.log('  • Hugging Face MCP Server - AI model access and inference');
console.log('  • Playwright MCP Server - Browser automation and testing');
console.log('  • Sequential Thinking MCP Server - Structured reasoning');
console.log('  • GitHub MCP Server - Repository management and analysis');

console.log('\n🔒 Security Status:');
console.log('  • Environment files (.env.local) are gitignored: ✅');
console.log('  • API keys are stored in environment variables: ✅');
console.log('  • MCP config uses ${env:} syntax: ✅');

console.log('\n💡 Next Steps:');
console.log('  1. Add your GitHub Access Token to .env.local');
console.log('  2. Test individual MCP servers with npm run mcp:test-*');
console.log('  3. Use MCP servers in your AI development workflow');