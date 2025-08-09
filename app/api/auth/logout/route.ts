import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        // 로그아웃 성공 응답
        return NextResponse.json({
            success: true,
            message: '로그아웃 성공'
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: '서버 오류가 발생했습니다.'
            },
            { status: 500 }
        );
    }
}
