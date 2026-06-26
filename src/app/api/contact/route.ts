import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // The Google Apps Script Web App URL
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzEHCyXeGU_YXbA4NCegzCAkigQPsta_5PDc1pw2RDqZ_0WRTK__yfOSoBLr-QCFOIazA/exec';

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.status === 'error') {
      throw new Error(result.message || 'Unknown error from Google Sheets');
    }

    return NextResponse.json({ message: 'Data saved successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}
