import Foundation
import Quartz

let args = CommandLine.arguments
if args.count < 3 {
    print("Usage: swift render_pdf.swift <pdf_path> <png_output_path>")
    exit(1)
}

let pdfPath = args[1]
let outputPath = args[2]

let pdfURL = URL(fileURLWithPath: pdfPath)
guard let doc = PDFDocument(url: pdfURL), let page = doc.page(at: 0) else {
    print("Error opening PDF: \(pdfPath)")
    exit(1)
}

let pageRect = page.bounds(for: .mediaBox)
let targetWidth: CGFloat = 1600
let scale = targetWidth / pageRect.width
let targetHeight = pageRect.height * scale

let img = NSImage(size: NSSize(width: targetWidth, height: targetHeight))
img.lockFocus()

if let context = NSGraphicsContext.current?.cgContext {
    context.setFillColor(NSColor.white.cgColor)
    context.fill(CGRect(x: 0, y: 0, width: targetWidth, height: targetHeight))
    context.scaleBy(x: scale, y: scale)
    page.draw(with: .mediaBox, to: context)
}

img.unlockFocus()

guard let tiffData = img.tiffRepresentation,
      let bitmap = NSBitmapImageRep(data: tiffData),
      let pngData = bitmap.representation(using: .png, properties: [:]) else {
    print("Error generating PNG")
    exit(1)
}

try pngData.write(to: URL(fileURLWithPath: outputPath))
print("SUCCESS: \(outputPath)")
