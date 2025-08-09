import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { password } = await request.json();

        // 환경변수에서 비밀번호 가져오기 (기본값은 'secret123')
        const correctPassword = process.env.PRESENTATION_PASSWORD || 'secret123';

        if (password === correctPassword) {
            // 성공 응답
            return NextResponse.json({
                success: true,
                message: '인증 성공'
            });
        } else {
            // 실패 응답
            return NextResponse.json(
                {
                    success: false,
                    message: '비밀번호가 올바르지 않습니다.'
                },
                { status: 401 }
            );
        }
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
