attribute vec4 vPosition;
attribute vec4 vColor;
attribute vec2 vTexCoord;

varying vec4 fPosition;
varying vec2 fTexCoord;
varying vec4 fColor;

uniform mat4 uMvpMatrix;
uniform mat4 uModelMatrix;

uniform float Factor1;

mat4 rotationMatrix(vec3 axis, float angle)
{
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

void main()
{
	fColor = vColor;
	fTexCoord = vTexCoord;

	const float amplitude = 0.2;
	vec4 pos = vPosition;
	// pos.y = amplitude * sin(5.0 * vPosition + Factor1);
	pos.y = amplitude * (sin(5.0 * vPosition.x + Factor1) + sin(5.0 * vPosition.z + Factor1)); // 2 directions
	
	//fPosition = pos;
	fPosition = uModelMatrix * pos; // If want to pass position
	
	gl_Position = uMvpMatrix * pos;
}