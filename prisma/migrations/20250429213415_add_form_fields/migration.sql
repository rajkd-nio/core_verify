-- AlterTable
ALTER TABLE "document_configurations" ADD COLUMN     "custom_fields" JSONB;

-- AlterTable
ALTER TABLE "document_titles" ADD COLUMN     "description" TEXT,
ADD COLUMN     "form_description" TEXT,
ADD COLUMN     "form_title" TEXT;

-- AlterTable
ALTER TABLE "document_types" ADD COLUMN     "description" TEXT,
ADD COLUMN     "form_id" TEXT,
ADD COLUMN     "hide_header" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "show_form_buttons" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "form_fields" (
    "id" SERIAL NOT NULL,
    "document_title_id" INTEGER NOT NULL,
    "field_name" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "placeholder" TEXT,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,
    "full_width" BOOLEAN NOT NULL DEFAULT true,
    "hidden" BOOLEAN NOT NULL DEFAULT false,
    "default_value" TEXT,
    "options" JSONB,
    "validation" JSONB,
    "conditional_show" JSONB,
    "help_text" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "form_fields_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "form_fields_document_title_id_idx" ON "form_fields"("document_title_id");

-- AddForeignKey
ALTER TABLE "form_fields" ADD CONSTRAINT "form_fields_document_title_id_fkey" FOREIGN KEY ("document_title_id") REFERENCES "document_titles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
